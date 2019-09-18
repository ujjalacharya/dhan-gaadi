import React from 'react';
import ImageUploader from 'react-images-upload';
import Layout from '../../core/Layout';

export default class Confirm extends React.Component {
	render() {
		const { nextStep, values, handleChange, buttonStyle=undefined} = this.props;
		return (
			<Layout title="Image uploader">
				<button
					className="btn btn-success"
					onClick={nextStep}
					style={{ width: '100%', display: (values.buttonStyle || buttonStyle) === 'none' ? 'block' : 'none' }}
				>
					Upload the photo and add the bus
				</button>
				<ImageUploader
					withIcon={true}
					buttonText="Choose photo"
					onChange={handleChange("image")}
					imgExtension={['.jpg', '.gif', '.png', '.gif']}
					maxFileSize={5242880}
					singleImage={true}
					withPreview={true}
					buttonStyles={{ display: values.buttonStyle || buttonStyle}}
				/>
			</Layout>
		);
	}
}
