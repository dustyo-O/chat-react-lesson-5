import { FC, useEffect, useState } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

import { cnImageRecognition } from './ImageRecognition.classname';
console.log(process.env.REACT_APP_CLARIFY_API_KEY);

type ImageRecongnitionProps = {
    url: string;
}
export const ImageRecongnition: FC<ImageRecongnitionProps> = ({ url }) => {
    const [concepts, setConcepts] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const consoleLog = () => {
            console.log('=================');
            console.log(window.scrollY);
        };

        window.addEventListener('scroll', consoleLog);

        return () => {
            window.removeEventListener('scroll', consoleLog);
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.clarifai.com/v2/models/general-image-recognition/versions/aa7f35c01e0642fda5cf400f543e7c40/outputs', {
            method: 'POST',
            body: `{
                "user_app_id": {
                    "user_id": "dusty",
                    "app_id": "dusty-education"
                },
                "inputs": [
                    {
                        "data": {
                            "image": {
                                "url": "${url}"
                            }
                        }
                    }
                ]
            }`,
            headers: {
                Accept: 'application/json',
                Authorization: `Key ${process.env.REACT_APP_CLARIFY_API_KEY}`,
            }
        })
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                setConcepts(result.outputs[0].data.concepts.map((concept: { name: string}) => concept.name));
            });
    }, [url]);

    return <div className={cnImageRecognition()}>
        {loading ? <ClimbingBoxLoader /> : concepts.map(concept => <div key={concept} className={cnImageRecognition('concept')}>
            {concept}
        </div>)}
    </div>;
};
