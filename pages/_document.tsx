import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <input type='checkbox' id='my-modal' className='modal-toggle' />
        <div className='modal'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg'>
              Congratulations random Internet user!
            </h3>
            <p className='py-4'>
              You&apos;ve been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className='modal-action'>
              <label htmlFor='my-modal' className='btn'>
                Yay!
              </label>
            </div>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
