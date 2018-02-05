export const createFollow = (followerId, followeeId) => (
  $.ajax({
    method: "POST",
    url: `/api/users/${followerId}/follows`,
    data: {followeeId: followeeId}
  })
);

export const deleteFollow = (followId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/follows/${followId}`
  })
);
