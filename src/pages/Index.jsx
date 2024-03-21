import React, { useState } from "react";
import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Select, Button, Image } from "@chakra-ui/react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission (e.g., send data to server)
    console.log(formData);
    // Reset form after submission
    setFormData({ name: "", email: "", workshop: "" });
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Workshop Registration
          </Heading>
          <Text fontSize="xl">Register for our upcoming workshops</Text>
        </Box>
        <Image src="https://images.unsplash.com/photo-1659301254614-8d6a9d46f26a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcHxlbnwwfHx8fDE3MTEwNDgyODd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Workshop" borderRadius="md" />
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={formData.name} onChange={handleChange} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            </FormControl>
            <FormControl id="workshop" isRequired>
              <FormLabel>Select a Workshop</FormLabel>
              <Select name="workshop" value={formData.workshop} onChange={handleChange} placeholder="Select a workshop">
                <option value="react">React Fundamentals</option>
                <option value="node">Node.js Basics</option>
                <option value="python">Python for Data Science</option>
              </Select>
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg">
              Register
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default Index;
