import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  Text,
  Container,
  Heading,
} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"900px"} my={0}>
      {/* Navbar */}
      <Box
        bg={useColorModeValue("gray.300", "gray.800")}
        px={7}
        py={0}
        borderRadius="md"
        shadow="md"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* Left Side: Brand or App Name */}
          <Heading
            as="h1"
            size="md"
            color={useColorModeValue("purple.700", "purple.300")}
          >
            MyTasks
          </Heading>

          {/* Right Side: Links and Theme Toggle */}
          <Flex alignItems={"center"} gap={5}>
            <Text fontSize={"lg"} fontWeight="500">
              Daily Tasks
            </Text>
            <Button onClick={toggleColorMode} variant="outline" size="sm">
              {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
            </Button>
          </Flex>
        </Flex>
      </Box>

      {/* Stylish Quote Section */}
      <Box mt={8} textAlign="center">
        <Heading
          as="h2"
          size="lg"
          fontWeight="bold"
          color={useColorModeValue("blue.600", "blue.300")}
          mb={2}
        >
          "Persist with passion; the best is yet to come!"
        </Heading>
        <Text fontSize="md" color={useColorModeValue("gray.600", "gray.400")}>
          Embrace each task as a step towards a better tomorrow.
        </Text>
      </Box>
    </Container>
  );
}
