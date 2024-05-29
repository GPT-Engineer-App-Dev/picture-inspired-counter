import { useState, useEffect } from "react";
import { Container, VStack, Text, Button, HStack, Box } from "@chakra-ui/react";

const Index = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setCount(0);
    setIsRunning(false);
  };

  const handleOnOff = () => {
    setIsOn(!isOn);
    if (!isOn) {
      setCount(0);
      setIsRunning(false);
    }
  };

  if (!isOn) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Button onClick={handleOnOff} colorScheme="red">
          On
        </Button>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box
          bg="black"
          color="green.400"
          fontSize="6xl"
          fontFamily="monospace"
          padding="4"
          borderRadius="md"
          boxShadow="lg"
        >
          {count}
        </Box>
        <HStack spacing={4}>
          <Button onClick={handleStartStop} colorScheme={isRunning ? "red" : "green"}>
            {isRunning ? "Stop" : "Start"}
          </Button>
          <Button onClick={handleReset} colorScheme="yellow">
            Reset
          </Button>
          <Button onClick={handleOnOff} colorScheme="red">
            Off
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;