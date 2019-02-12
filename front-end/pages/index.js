import Link from 'next/link';
import IndexHead from '../component/IndexHead';

function Home() {
    return (
        <>
        <IndexHead/>
            <container className="imagebg text-center height-80" data-gradient-bg="#5f2c82,#49a09d,#F3A183,#5f2c82">
                <div className="background-image-holder">
                <img alt="background" src="/static/assets/img/main2.jpg"/>

                </div>
                <div className="container pos-vertical-center">
                    <div className="row">
                        <div className="col-md-9"> 
                            <img alt="Image" src="/static/assets/img/big_logo.png" />
                            <div className="hosted">
                                Over <strong>200</strong> raffles!
                            </div>
                        </div>
                </div>
                </div>
            </container>
            </>
    )
}
export default Home; 