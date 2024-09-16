import { useForm, isEmail, hasLength} from '@mantine/form';
import { Button, Group, TextInput, Textarea  } from '@mantine/core';

function ContactForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      yourMessage: '',
    },

    validate: {
      name: hasLength({ min: 2 }, 'Name must be 2-10 characters long'),
      email: isEmail('Invalid email'),
      yourMessage: hasLength({ min: 2 }, 'Name must be 2-10 characters long'),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
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
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export default ContactForm;