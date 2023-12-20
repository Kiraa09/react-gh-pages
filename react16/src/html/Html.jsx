import React from 'react';
import Image1 from './images/Virat_Kohli.jpg'
import Audio1 from './audio/a-call-to-the-soul-149262.mp3'
import Video1 from './video/SkinTones.mp4'

function Html(){
    return(
        <div>
            <h1>Welcome to React Html</h1>
            <img src="https://static.toiimg.com/photo/104569311.cms" alt="" height={'500px'} width={'49%'}  />
            <img src={Image1} alt=""height={'500px'} width={'49%'} />
            <audio src={Audio1} controls autoPlay muted loop></audio>
            <br />
            <video src={Video1} controls autoPlay muted width={'40%'}></video>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AdHLDvPH8BU?si=y7R_CFmPYu268w1z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5126240513396!2d73.94798617470846!3d18.550913868247676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c50999945d%3A0xf045ba636617a089!2sEon%20Free%20Zone%20Rd%2C%20EON%20Free%20Zone%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1702443513199!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" ></iframe>
            <table border={1} rules={'all'}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mail</th>
                        <th>Place</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Kiran</td>
                        <td>abc@gmail</td>
                        <td>Karad</td>
                    </tr>
                    <tr>
                        <td>Kiran</td>
                        <td>abc@gmail</td>
                        <td>Karad</td>
                    </tr>
                    <tr>
                    <td>Kiran</td>
                        <td>abc@gmail</td>
                        <td>Karad</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            Copyright@Kg
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
export default Html