import { useAmp } from 'next/amp'

export const config = { amp: 'hybrid' }

function Footer(props) {
  const isAmp = useAmp()

  return (
    <div>
      <h3>Footer Section</h3>
      {isAmp ? (
        <amp-img
          width="300"
          height="300"
          src="./images/10.jpeg"
          alt="a cool image"
          layout="responsive"
        />
      ) : (
        <img width="300" height="300" src="./images/img10.jpeg" alt="a cool image" />
      )}
    </div>
  )
}

export default Footer