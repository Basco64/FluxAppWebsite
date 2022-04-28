import React, { useRef } from 'react'
import Head from 'next/head'
import { Heading, Stack, FormControl, FormLabel, Input, Button, useColorModeValue, Textarea, FormErrorMessage, Text } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footers/Footer'
import ResetButton from '../../components/Buttons/ResetButton.tsx';

export default function WeNeedYou() {

    const id = useRef()
    const idea = useRef()

    const registerIdea = e => {

        const newIdea = {
            id: id.current.value,
            idea: idea.current.value,
        };

        fetch('api/idee', {
            method: "POST",
            body: JSON.stringify(newIdea),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                res.json()
                console.log('Response received')
                if (res.status === 200) {
                    console.log('Response succeeded!')
                }
            })
            .then(data => {
                console.log(data);
            });
    }

    function validID(value) {
        let error
        if (!value) {
            error = 'ID is required.'
        }
        // else if ((value.includes('@') === false) || (value.includes('#') === false)) {
        //     error = "Need discord or Twitter handle."
        // }
        return error
    }

    function validIdea(value) {
        let error
        if (!value) {
            error = 'Opinion is required.'
        } else if (value.length < 50) {
            error = "Need at least 50 characters, don't hesitate to be precise ;)"
        }
        return error
    }

    return (
        <>
            <Head>
                <title>We Need You!</title>
            </Head>
            <Header />
            <Heading as='h1' fontSize={{ base: "2xl", lg: "4xl" }} align={'center'} mb={10} fontWeight={'bold'} >Your Opinion Counts !!!</Heading >
            <Text as='h4' fontSize={{ base: "md", lg: "xl" }} align={'center'}>Feel free to give ideas for improvement for this site or even sites/games you would like to see on the Flux network</Text>
            <Stack mt='5em' mb='2em'>
                <Formik
                    enableReinitialize
                    let initialValues={{
                        id: "",
                        idea: ""
                    }}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            registerIdea()
                            actions.setSubmitting(false)
                            alert('Thanks for your contribution :)')
                        }, 1000)
                    }}
                >
                    {(props) => (
                        <Form>
                            <Field name='id' validate={validID}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.id && form.touched.id} >
                                        <FormLabel htmlFor="id">Where can we talk? (Discord or Twitter handle)</FormLabel>
                                        <Input {...field} ref={id} id="id" focusBorderColor='#35C9A5' htmlSize={20} width='auto' />
                                        <FormErrorMessage>{form.errors.id}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='idea' validate={validIdea}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.idea && form.touched.idea}>
                                        <FormLabel mt='5' htmlFor="idea">What's your idea?</FormLabel>
                                        <Textarea {...field} focusBorderColor='#35C9A5' ref={idea} id="idea" type='text' />
                                        <FormErrorMessage>{form.errors.idea}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Button
                                isLoading={props.isSubmitting}
                                type="submit"
                                style={{ float: 'right' }}
                                size={'md'}
                                fontWeight="bold"
                                fontSize={'lg'}
                                bg={useColorModeValue('#b3b3b3', '#171717')}
                                color={useColorModeValue('#171717', '#f7f7f7')}
                                mt='3'
                            >Post
                            </Button>
                            <ResetButton
                                size={'md'}
                                fontWeight="bold"
                                fontSize={'lg'}
                                mt='3'
                                bg={useColorModeValue('#b3b3b3', '#171717')}
                                color={useColorModeValue('#171717', '#f7f7f7')}
                            >Clear
                            </ResetButton>
                        </Form>
                    )}
                </Formik>
            </Stack>
            <Footer />
        </>
    )
}

