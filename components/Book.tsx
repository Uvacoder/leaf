import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { SearchItem } from "@util/types";
import Link from "next/link";
import React from "react";

interface Props {
  book: SearchItem;
}

const Book: React.FC<Props> = ({ book }) => {
  console.log(book);

  return (
    <Link href={`/book/${book.id}`}>
      <Box maxW="130px" mr="8" cursor="pointer">
        <Image
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
          objectFit="cover"
          minW="130px"
          h="200px"
          m="0 auto"
          mb="4"
        />
        <Text isTruncated={true} as="h3" fontSize="md" textAlign="center">
          {book.volumeInfo.title}
        </Text>
      </Box>
    </Link>
  );
};

export default Book;
