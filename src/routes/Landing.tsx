import React from 'react';
import { Heading, HStack, Button, VStack, Text, Image, Box } from '@chakra-ui/react';
import guy from '../../assets/images/girl.png';
import heart from '../../assets/images/heart.svg';
import play from '../../assets/images/play.svg';
import playlist from '../../assets/images/playlist.svg';

const Landing = () => (
    <>
        <VStack
            paddingInline="60px"
            height="500px"
            overflowY="hidden"
            background="linear-gradient(117.05deg, #179544 -4.16%, #00CE49 94.12%)"
        >
            <HStack alignItems="flex-start" justifyContent="space-between" width="100%">
                <VStack alignItems="flex-start" rowGap="18px" paddingBlock="150px">
                    <Heading color="white" fontSize="48px" fontWeight="bold" fontFamily="Inter">
                        Millions of songs <br />
                        and podcasts, in <br />
                        your pocket.
                    </Heading>
                    <Button borderRadius="19px" paddingInline="24px" transition="0.3s all ease-in">
                        <Text fontWeight="semibold" fontSize="10px" fontFamily="Inter">
                            DOWNLOAD FREE
                        </Text>
                    </Button>
                </VStack>
                <Image src={guy} height="680px" />
            </HStack>
        </VStack>
        <VStack paddingInline="60px" paddingBlock="60px">
            <Heading color="black" fontSize="48px" fontFamily="Inter">
                Why Spotify
            </Heading>
            <HStack
                columnGap="28px"
                style={{
                    marginBlockStart: '60px',
                }}
            >
                <VStack maxWidth="250px" rowGap="8px">
                    <Box borderRadius="full" padding="9px" backgroundColor="black">
                        <Image src={heart} height="35px" />
                    </Box>
                    <Text fontSize="18px" fontFamily="Inter" fontWeight="Bold">
                        Make it yours
                    </Text>
                    <Text align="center" fontSize="14px" fontFamily="Inter" color="black">
                        Tell us what you like, and we&apos;ll recommend music for you.
                    </Text>
                </VStack>
                <VStack maxWidth="250px" rowGap="8px">
                    <Box
                        height="53px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="full"
                        padding="9px"
                        backgroundColor="black"
                    >
                        <Image src={playlist} width="35px" />
                    </Box>
                    <Text fontSize="18px" fontFamily="Inter" fontWeight="Bold">
                        Playlists made easy.
                    </Text>
                    <Text align="center" fontSize="14px" fontFamily="Inter" color="black">
                        We&apos;ll help you make playlists. Or enjoy playlists made by music
                        experts.
                    </Text>
                </VStack>
                <VStack maxWidth="250px" rowGap="8px">
                    <Box borderRadius="full" padding="9px" backgroundColor="black">
                        <Image src={play} height="35px" />
                    </Box>
                    <Text fontSize="18px" fontFamily="Inter" fontWeight="Bold">
                        Play your favorites
                    </Text>
                    <Text align="center" fontSize="14px" fontFamily="Inter" color="black">
                        Listen to the songs you love, and discover new music and podcasts.
                    </Text>
                </VStack>
            </HStack>
        </VStack>
        <VStack
            paddingBlock="60px"
            paddingInline="60px"
            overflowY="hidden"
            background="linear-gradient(117.05deg, #179544 -4.16%, #00CE49 94.12%)"
        >
            <Heading color="black" fontSize="48px" fontFamily="Inter">
                Forever free.
            </Heading>
            <Text color="black" fontSize="18px" fontFamily="Inter" fontWeight="Bold">
                No credit card needed.
            </Text>
        </VStack>
        <VStack paddingBlock="60px" paddingInline="60px">
            <Heading color="black" fontSize="48px" fontFamily="Inter">
                Got questions?
            </Heading>
            <Text color="black" fontSize="18px" fontFamily="Inter" fontWeight="Bold">
                We&apos;ve got answers.
            </Text>
        </VStack>
        <VStack
            paddingBlock="60px"
            paddingInline="60px"
            overflowY="hidden"
            background="linear-gradient(117.05deg, #179544 -4.16%, #00CE49 94.12%)"
        >
            <Heading color="black" fontSize="48px" fontFamily="Inter">
                Ready, Let’s play !
            </Heading>
            <Button borderRadius="19px" paddingInline="24px" transition="0.3s all ease-in">
                <Text fontWeight="semibold" fontSize="10px" fontFamily="Inter">
                    DOWNLOAD SPOTIFY FREE
                </Text>
            </Button>
        </VStack>
    </>
);
export default Landing;
