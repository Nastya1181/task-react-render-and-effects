import { useState, useEffect } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [message, setMessage] = useState(-1);
    useEffect(() => {
        setMessage(-1);
        subscribe(props.sourceId, setMessage);
        return () => {
            unsubscribe(props.sourceId, setMessage);
        };
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {message}
        </div>
    );
}
