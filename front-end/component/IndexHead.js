import Head from 'next/head'

function IndexHead() {
  return (
    <>
      <Head>
        <title>Raffle stuff</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="/static/css/stack-interface.css" rel="stylesheet" type="text/css" media="all"/>

        <link href="/static/css/iconsmind.css" rel="stylesheet" type="text/css" media="all" />
        
        <link href="/static/css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />

        <link href="/static/css/flickity.css" rel="stylesheet" type="text/css" media="all" />
        
        <link href="/static/css/theme.css" rel="stylesheet" type="text/css" media="all" />

        <link href="/static/css/custom.css" rel="stylesheet" type="text/css" media="all" />

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500" rel="stylesheet" type="text/css"/>

        <link href="/static/css/font-raleway.css" rel="stylesheet" type="text/css"/>
      </Head>
    </>

  )
}

export default IndexHead