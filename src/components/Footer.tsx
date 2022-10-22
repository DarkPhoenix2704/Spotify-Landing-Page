import React from 'react';
import { HStack, Link, Text } from '@chakra-ui/react';

export const Footer = () => (
    <HStack
        backgroundColor="black"
        paddingInline="60px"
        paddingBlock="20px"
        justifyContent="space-between"
        width="100%"
    >
        <HStack columnGap="28px">
            <Text textColor="white" fontFamily="Inter" fontSize="14px">
                Home
            </Text>
            <Text textColor="white" fontFamily="Inter" fontSize="14px">
                About
            </Text>
            <Text textColor="white" fontFamily="Inter" fontSize="14px">
                Blog
            </Text>
            <Text textColor="white" fontFamily="Inter" fontSize="14px">
                Contact
            </Text>
        </HStack>
        <Text textColor="white" fontFamily="Inter" fontSize="14px">
            © 2021 Spotify Clone. All rights reserved. Made with ❤️ by{' '}
            <Link href="https://github.com/DarkPhoenix2704">DarkPhoenix2704</Link>{' '}
        </Text>
    </HStack>
);
