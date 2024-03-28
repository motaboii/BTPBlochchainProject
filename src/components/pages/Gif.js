import React from 'react';

const Gif = () => {
  const gifStyle = {
    maxWidth: '100%',
    maxHeight: '50%', // Set maximum height to 50% of the viewport height
    display: 'block',
    margin: 'auto',
    borderRadius: '10px', // Optional: Add some border-radius for a nicer look
  };

  return (
    <div>
      <img
        src="https://discovertemplate.com/wp-content/uploads/2020/12/DT_G66_Bitcoin-Animated-GIF-Icon-Pack.gif"  // Replace with your correct image URL
        alt="Blockchain Animation GIF"
        style={gifStyle}
      />
    </div>
  );
};

export default Gif;
