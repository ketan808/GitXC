'use client';
import classes from '../components/VapiButtonStyle.module.css';
import { Button, Loader } from '@mantine/core';
import { IconMicrophone } from '@tabler/icons-react';
import { useEffect, useState, createContext, useContext } from 'react';
import Vapi from '@vapi-ai/web';
import { VAPI_CONFIG } from '../config/vapi';
import AudioVisualizer from './AudioVisualizer';

export const VapiContext = createContext<{
  vapiInstance: Vapi | null;
  isListening: boolean;
  setIsListening: (value: boolean) => void;
}>({
  vapiInstance: null,
  isListening: false,
  setIsListening: () => {},
});

export function VapiProvider({ children }: { children: React.ReactNode }) {
  const [vapiInstance, setVapiInstance] = useState<Vapi | null>(null);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !vapiInstance) {
      const vapi = new Vapi(VAPI_CONFIG.PUBLIC_KEY);
      setVapiInstance(vapi);
    }
  }, []);

  // Only stop the voice agent when the entire app is unmounting
  useEffect(() => {
    return () => {
      if (vapiInstance) {
        vapiInstance.stop();
      }
    };
  }, [vapiInstance]);

  return (
    <VapiContext.Provider value={{ vapiInstance, isListening, setIsListening }}>
      {children}
    </VapiContext.Provider>
  );
}

export function VoiceAgent() {
  const { vapiInstance, isListening, setIsListening } = useContext(VapiContext);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!vapiInstance) return;

    const setupVapi = () => {
      setIsInitialized(true);
      vapiInstance
        .on('call-start', () => {
          setIsLoading(false);
        })
        .on('call-end', () => {
          setIsListening(false);
          setIsLoading(false);
          setIsHovered(false);
        })
        .on('error', () => {
          setIsListening(false);
          setIsLoading(false);
          setIsHovered(false);
        });
    };

    setupVapi();
  }, [vapiInstance]);

  const toggleListening = async () => {
    if (!vapiInstance || !isInitialized) return;

    try {
      if (isListening) {
        setIsLoading(true);
        await vapiInstance.stop();
        setIsListening(false);
        setIsHovered(false);
      } else {
        setIsLoading(true);
        setIsHovered(true);
        await vapiInstance.start(VAPI_CONFIG.ASSISTANT_ID, VAPI_CONFIG.ASSISTANT_OVERRIDES);
        setIsListening(true);
      }
    } catch (error) {
      console.error('Error toggling voice agent:', error);
      setIsListening(false);
      setIsHovered(false);
    } finally {
      setIsLoading(false);
    }
  };

  const getButtonText = () => {
    if (isHovered) {
      if (isLoading) return 'Connecting...';
      return isListening ? 'Stop' : 'Try Me';
    }
    if (!isInitialized) return 'Loading...';
    if (isLoading) return 'Connecting...';
    if (isListening) return 'Connected';
    return 'Talk To Me';
  };

  return (
    <>
      <Button 
        fullWidth 
        classNames={{
          root: `${classes.root} ${(isLoading || isListening) ? classes.active : ''}`
        }}
        onClick={toggleListening}
        rightSection={
          <div style={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
            {isLoading ? <Loader type="dots" size={40} color="var(--mantine-fontcolor-0)" /> : <IconMicrophone stroke={1} size={40} />}
          </div>
        }
        variant="filled"
        disabled={!isInitialized}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {getButtonText()}
      </Button>
      <AudioVisualizer />
    </>
  );
} 