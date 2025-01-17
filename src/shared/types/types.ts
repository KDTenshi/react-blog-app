export type TPostItem = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type TCommentItem = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
