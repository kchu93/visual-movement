export const createFollow = (followee_id) => (
  $.ajax({
    method: "POST",
    url: `/api/users/${followee_id}/follows`,
    data: { followee_id }
  })
);

export const deleteFollow = (followId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/follows/${followId}`
  })
);
