import {useEffect} from "react"
import {loader} from '../../utils'
import Head from 'next/head'

function PreloaderContainer({Title}){

	useEffect(() => {
		loader()
	},[])

	return(
		<>
	        <Head>
	            <meta charSet="utf-8" />
	            <title>{Title}</title>
	            <meta name="robots" content="noindex, follow" />
	            <meta
	                name="description"
	                content="Hope – Health &amp; Medical React JS Template"
	            />
	            <meta
	                name="viewport"
	                content="width=device-width, initial-scale=1, shrink-to-fit=no"
	            />
	        </Head>
		    <div id="preloader">
		        <div className="preload-content">
		            <div id="dream-load"></div>
		        </div>
		    </div>
	    </>
	)
}

export default PreloaderContainer