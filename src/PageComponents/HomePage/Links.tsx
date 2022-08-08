import '../../styles/Links.scss'

export const Links = () => {
    return (
        <div>
        <svg className="svg--source" width="0" height="0" aria-hidden="true">

  <symbol id="svg--github" viewBox="-30 -30 150 150">
    <path d="M61.896,52.548c-3.59,0-6.502,4.026-6.502,8.996c0,4.971,2.912,8.999,6.502,8.999
		c3.588,0,6.498-4.028,6.498-8.999C68.395,56.574,65.484,52.548,61.896,52.548z M84.527,29.132c0.74-1.826,0.777-12.201-3.17-22.132
		c0,0-9.057,0.993-22.76,10.396c-2.872-0.793-7.736-1.19-12.597-1.19s-9.723,0.396-12.598,1.189C19.699,7.993,10.645,7,10.645,7
		c-3.948,9.931-3.913,20.306-3.172,22.132C2.834,34.169,0,40.218,0,48.483c0,35.932,29.809,36.508,37.334,36.508
		c1.703,0,5.088,0.004,8.666,0.009c3.578-0.005,6.965-0.009,8.666-0.009C62.191,84.991,92,84.415,92,48.483
		C92,40.218,89.166,34.169,84.527,29.132z M46.141,80.574H45.86c-18.859,0-33.545-2.252-33.545-20.58
		c0-4.389,1.549-8.465,5.229-11.847c6.141-5.636,16.527-2.651,28.316-2.651c0.045,0,0.093-0.001,0.141-0.003
		c0.049,0.002,0.096,0.003,0.141,0.003c11.789,0,22.178-2.984,28.316,2.651c3.68,3.382,5.229,7.458,5.229,11.847
		C79.686,78.322,65,80.574,46.141,80.574z M30.104,52.548c-3.588,0-6.498,4.026-6.498,8.996c0,4.971,2.91,8.999,6.498,8.999
		c3.592,0,6.502-4.028,6.502-8.999C36.605,56.574,33.695,52.548,30.104,52.548z" />
  </symbol>

  <symbol id="svg--linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
aria-describedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
  <title>Linkedin</title>
  <path data-name="layer1"
   d="M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z"></path>
</symbol>

<symbol id="svg--google" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z"/></symbol>

</svg>

<div className="wrapper">
<div className="connect">

  <a href="mailto: waterblt@rose-hulman.edu" rel="author" className="share google">
    <svg role="presentation" className="svg--icon">
      <use xlinkHref="#svg--google" style={{transformOrigin: "-9px -9px", transform: "scale(2.2)"}}/>
      <span className="clip">GMAIL</span>
    </svg>
  </a>


  <a href="https://github.com/rhit-waterblt" className="share github">
    <svg role="presentation" className="svg--icon">
      <use xlinkHref="#svg--github" />
      <span className="clip">GITHUB</span>
    </svg>
  </a>

  <a href="https://www.linkedin.com/in/liam-waterbury-a38b5a222/" className="share linkedin">
    <svg role="presentation" style={{transformOrigin: "center", transform: "scale(.6)"}} className="svg--icon">
      <use xlinkHref="#svg--linkedin" />
      <span className="clip">LINKEDIN</span>
    </svg>
  </a>

</div>
</div>
</div>
    )
}