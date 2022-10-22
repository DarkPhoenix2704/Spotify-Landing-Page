import React from 'react';
import { HStack, Image, Text, Button } from '@chakra-ui/react';
import logo from '../../assets/images/logo.png';

export const Navbar = () => (
    <HStack
        backgroundColor="black"
        paddingInline="36px"
        paddingBlock="18px"
        justifyContent="space-between"
    >
        <Image height="45x" width="150px" src={logo} />
        <HStack columnGap="26px">
            <Text
                cursor="pointer"
                fontFamily="Inter"
                fontSize="16px"
                textColor="white"
                transition="0.3s all ease-in-out"
                _hover={{
                    textColor: '#00CE49',
                    textDecoration: 'underline',
                    textUnderlineOffset: '5px',
                }}
            >
                Premium
            </Text>
            <Text
                cursor="pointer"
                fontFamily="Inter"
                fontSize="16px"
                textColor="white"
                transition="0.3s all ease-in-out"
                _hover={{
                    textColor: '#00CE49',
                    textDecoration: 'underline',
                    textUnderlineOffset: '5px',
                }}
            >
                Support
            </Text>
            <Text
                cursor="pointer"
                fontFamily="Inter"
                fontSize="16px"
                textColor="white"
                transition="0.3s all ease-in-out"
                _hover={{
                    textColor: '#00CE49',
                    textUnderlineOffset: '5px',
                    textDecoration: 'underline',
                }}
            >
                Login/Sign up
            </Text>
            <Button
                borderRadius="19px"
                paddingInline="24px"
                transition="0.3s all ease-in-out"
                _hover={{
                    backgroundColor: '#00CE49',
                }}
            >
                Download
            </Button>
        </HStack>
    </HStack>
);
