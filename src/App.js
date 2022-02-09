import "./App.css";
import { Box, Image, Badge, Flex, Spacer } from "@chakra-ui/react";

function App() {
  const property = {
    imageUrl:
      "https://everythingbarca.com/wp-content/uploads/getty-images/2018/11/1026232498.jpeg",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <div>
      <Flex bg="FFFFFF" w="100%" p={4} color="grey">
        <Box w="20%">My-Insta</Box>
        <Spacer />
        <Box w="40%">Search</Box>
        <Spacer />
        <Box>Icons</Box>
      </Flex>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Flex>
          <Image
            boxSize="50px"
            borderRadius="full"
            src={property.imageUrl}
            alt={property.imageAlt}
          />
          <Box>furgoneta</Box>
        </Flex>
        <Image src={property.imageUrl} alt={property.imageAlt} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>

          <Box>
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {/* {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))} */}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
