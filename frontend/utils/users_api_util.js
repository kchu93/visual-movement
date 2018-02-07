export const fetchUsers = () => (
  $.ajax({
    method: "GET",
    url: '/api/users'
  })
);

export const fetchUser = id => (
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  })
);


export const createFollow = (followed_user) => (
  $.ajax({
    method: "POST",
    url: `/api/follows`,
    data: { followed_user }
  })
);

export const deleteFollow = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/follows/${id}`
  })
);
