import React from 'react';
import ImageUploader from 'react-images-upload';
import Layout from '../../core/Layout';

export default class Comfirm extends React.Component {
	render() {
		const { nextStep, values, onDrop } = this.props;
		console.log(values.buttonStyle);
		return (
			<Layout title="Image uploader">
				<button
					className="btn btn-success"
					onClick={nextStep}
					style={{ width: '100%', display: values.buttonStyle === 'none' ? 'block' : 'none' }}
				>
					Upload the photo and add the bus
				</button>
				<ImageUploader
					withIcon={true}
					buttonText="Choose photo"
					onChange={onDrop}
					imgExtension={['.jpg', '.gif', '.png', '.gif']}
					maxFileSize={5242880}
					singleImage={true}
					withPreview={true}
					buttonStyles={{ display: values.buttonStyle }}
				/>
			</Layout>
		);
	}
}
