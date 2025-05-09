import React, { useState } from 'react';
import { useForm, isEmail, hasLength} from '@mantine/form';
import { Button, Group, TextInput, Textarea, Text } from '@mantine/core';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('xoLdy8-AuV6zpUbGM');

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      yourMessage: '',
    },

    validate: {
      name: hasLength({ min: 1 }, 'Name must not be empty'),
      email: isEmail('Invalid email'),
      yourMessage: hasLength({ min: 1 }, 'Message must not be empty'),
    },
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    setError('');
    
    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.yourMessage,
        to_email: 'design@xtracreative.co.uk',
      };

      console.log('Attempting to send email with params:', templateParams);
      
      const response = await emailjs.send(
        'service_ohdo7hg',
        'template_ohdo7hg', // This should match your template ID from EmailJS dashboard
        templateParams,
        'xoLdy8-AuV6zpUbGM' // Adding public key here as well for redundancy
      );
      
      console.log('Email sent successfully:', response);
      setSubmitted(true);
    } catch (err) {
      console.error('Detailed EmailJS error:', {
        message: err.message,
        text: err.text,
        status: err.status,
        stack: err.stack
      });
      setError(`Failed to send message: ${err.message || 'Please try again later'}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <Text>Thank you for your message! I will get back in touch with you soon! Have a great day!</Text>
    );
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      {error && (
        <Text color="red" mb="md">
          {error}
        </Text>
      )}
      
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        key={form.key('name')}
        {...form.getInputProps('name')}
      />

      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      
      <Textarea 
        label="Your Message"
        placeholder="Your Message"
        withAsterisk
        mt="md"
        autosize
        minRows={6}
        maxRows={6}
        key={form.key('yourMessage')}
        {...form.getInputProps('yourMessage')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={isLoading}>
          Send
        </Button>
      </Group>
    </form>
  );
}

export default ContactForm;