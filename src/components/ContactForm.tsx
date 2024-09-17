import React, { useState } from 'react';
import { useForm, isEmail, hasLength} from '@mantine/form';
import { Button, Group, TextInput, Textarea, Text  } from '@mantine/core';



function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

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
      yourMessage: hasLength({ min: 1 }, 'Name must not be empty'),
    },
  });


  const handleSubmit = (values) => {
    setSubmitted(true);
  };

  if (submitted) {
    return (

<Text>Thank you for your message! I will get back in touch with you soon! Have a great day!</Text>
 
    );
  }




  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
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
        <Button type="submit">Send</Button>

      </Group>

    </form>
  );
}

export default ContactForm;