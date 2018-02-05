export const createFollow = (followed_user) => (
  $.ajax({
    method: "POST",
    url: `/api/follows`,
    data: { followed_user }
  })
);

export const deleteFollow = (followId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/follows/${followId}`
  })
);
