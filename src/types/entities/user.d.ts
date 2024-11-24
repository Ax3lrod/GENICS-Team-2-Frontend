export interface User {
  user: {
    id: string;
    username: string;
    email: string;
    faculty: string;
    department: string;
    uploadedModules: [
      {
        id: string;
        title: string;
      },
    ];
    votes: [
      {
        id: string;
        voteType: string;
        module: {
          id: string;
          title: string;
        };
      },
    ];
  };
}

export interface UpdateUser {
  nama: string;
  phone_number: string;
  jenjang: string;
  provinsi_num: number;
}

export interface withToken {
  token: string;
}

export interface MyProfile {
  id: string;
  username: string;
  email: string;
  faculty: string;
  department: string;
  password: string;
  uploadedModules: [
    {
      id: string;
      title: string;
    },
  ];
  votes: [
    {
      id: string;
      voteType: string;
      module: {
        id: string;
        title: string;
      };
    },
  ];
}

export interface UpdateUser {
  nama: string;
  phone_number: string;
  jenjang: string;
  provinsi_num: number;
}

export interface withToken {
  token: string;
}

export interface MyProfile {
  id: string;
  username: string;
  email: string;
  faculty: string;
  department: string;
  password: string;
  uploadedModules: [
    {
      id: string;
      title: string;
    },
  ];
  votes: [
    {
      id: string;
      voteType: string;
      module: {
        id: string;
        title: string;
      };
    },
  ];
}
