export const searchData = (query) => (
  $.ajax({
    method: 'GET',
    url: `api/searches/${query}`
  })
);
