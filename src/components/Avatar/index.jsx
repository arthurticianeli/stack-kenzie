import { Box, Image, Text } from "@chakra-ui/react";

import ImgDefault from "../../assets/imgDefault.svg";

export default function Avatar({ userCreator }) {
  return (
    <>
      <Box as="figure" textAlign="center">
        <Image
          src={!!userCreator?.image ? userCreator.image : ImgDefault}
          borderRadius="full"
          w={["55px", "55px", "100px", "100px"]}
          h={["55px", "55px", "100px", "100px"]}
        />
        <Text as="figcaption" fontSize="13.1283px">
          {userCreator?.name}
        </Text>
      </Box>
    </>
  );
}