import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react';
import { PROPERTY_ID, WIDGET_ID } from '../config';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const tawkMessengerRef = useRef(true);

  return (
    <>
      <Component {...pageProps} />
      <TawkMessengerReact propertyId={PROPERTY_ID} widgetId={WIDGET_ID} ref={tawkMessengerRef} />
    </>
  );
}

export default MyApp;
