import React from 'react';
import profilePicture from '../../assets/small/logos/profilePicture.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/about.css'

function About() {
    return (
        <section className="my-5 about">
            <h1 id="about">About Me</h1>
            <hr />
            <img className="profilePicture" src={profilePicture} />
            <p>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et tempor nisi, ut dignissim ex. Maecenas vulputate purus vitae velit egestas, a semper orci venenatis. Vivamus luctus in nibh vitae imperdiet. Praesent vulputate quam et quam ullamcorper, a maximus libero volutpat. Aliquam sit amet venenatis nulla. In id nisl a lacus aliquam bibendum eget sed est. Ut fermentum diam et nunc rutrum gravida. Quisque id enim nisl. Pellentesque purus lectus, volutpat at mattis quis, ornare et quam. Aenean vulputate justo eget nisi imperdiet, non maximus libero tempus. Sed volutpat justo lorem, id varius leo imperdiet sed.

                Vestibulum tristique enim a ultricies molestie. Phasellus nec justo eget purus bibendum auctor sit amet sollicitudin enim. Nullam mattis malesuada lacinia. Maecenas cursus leo ante, in rutrum mi aliquam id. Donec hendrerit pharetra mattis. Nulla dui odio, suscipit id tincidunt sed, vehicula quis elit. Integer sed metus a eros fringilla pellentesque quis vel lacus. Morbi ut congue massa. Aliquam metus turpis, maximus quis nibh sit amet, congue tincidunt arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                Integer ultrices vitae diam ut tempor. Aliquam dapibus, risus eu rutrum cursus, risus leo egestas ante, placerat cursus neque elit eu leo. </p>
        </section>
    );
}

export default About;