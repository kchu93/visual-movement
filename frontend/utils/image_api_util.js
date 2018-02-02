export const fetchImages = () => (
  $.ajax({
    method: 'GET',
    url: '/api/images'
  })
);


export const createImage = image => (
  $.ajax({
    method: 'POST',
    url: '/api/images',
    data: {image}
  })
);


export const fetchImage = id => (
  $.ajax({
    method: 'GET',
    url: `/api/images/${id}`
  })
);


export const updateImage = image => (
  $.ajax({
    method: 'PATCH',
    url: `/api/images/${image.id}`,
    data: { image }
  })
);


export const deleteImage = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/images/${id}`,
  })
);
