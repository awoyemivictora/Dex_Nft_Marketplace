import Head from 'next/head'

import '../assets/css/global.css'

import '../assets/css/countdown.css'
import '../assets/css/flip-countdown.scss'
import '../assets/css/slide-countdown.scss'

function MyApp({ Component, pageProps }) {
  return (
  			<>
		        <Head>
		            <meta charSet="utf-8" />
		            <meta name="robots" content="noindex, follow" />
		            <meta
		                name="description"
		                content="Hope – Health &amp; Medical React JS Template"
		            />
		            <meta
		                name="viewport"
		                content="width=device-width, initial-scale=1, shrink-to-fit=no"
		            />
					<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
					<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
					<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
					<script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ="></script>
					<script defer src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
					<script defer src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
		        </Head>
  				<Component {...pageProps} />
  			</>
  		)	
}

export default MyApp
