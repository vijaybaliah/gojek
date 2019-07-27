import React from "react";
import PropTypes from 'prop-types';

export const imageOnClick = (props) => {
  const { id, handleImageClick } = props
  handleImageClick(id);
}

const Images = (props) => {
  const { imageData, isSelected, title } = props
  return (
    <div
      data-test='Images'
      onClick={() => imageOnClick(props)}
    >
      {
        !isSelected && imageData && imageData.fixed_height_still.url &&
        <img
          data-test='imageFixedStillUrl'
          src={imageData.fixed_height.url}
          alt={title}
        />
      }
      {
        isSelected && imageData && imageData.fixed_height.url &&
        <img
          data-test='imageSelected'
          src={imageData.fixed_height.url}
          alt={title}
        />
      }
      {
        !isSelected && imageData && !imageData.fixed_height_still.url &&
        <div data-test='imageNotFound'>Image Not Found</div>
      }
      {
        isSelected && imageData && !imageData.fixed_height.url &&
        <div data-test='imageNotFound'>Image Not Found</div>
      }
    </div>
  )
}

Images.prototype = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageData: PropTypes.object.isRequired,
  handleImageClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

export default Images;