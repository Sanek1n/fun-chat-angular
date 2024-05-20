import { Observable } from 'rxjs';

export interface Request<T> {
  id: string | null,
  type: string,
  payload: T,
}

export enum MessageType {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',
  USER_EXTERNAL_LOGIN = 'USER_EXTERNAL_LOGIN',
  USER_EXTERNAL_LOGOUT = 'USER_EXTERNAL_LOGOUT',
  USER_ACTIVE = 'USER_ACTIVE',
  USER_INACTIVE = 'USER_INACTIVE',
  MSG_SEND = 'MSG_SEND',
  MSG_FROM_USER = 'MSG_FROM_USER',
  MSG_DELIVER = 'MSG_DELIVER',
  MSG_READ = 'MSG_READ',
  MSG_DELETE = 'MSG_DELETE',
  MSG_EDIT = 'MSG_EDIT',
  ERROR = 'ERROR',
}

export interface WebsocketService {
  on<T>(event: string): Observable<T>,
  send(event: string): void,
  status: Observable<boolean>,
}

export interface User {
  login: string,
  isLogined: boolean,
}

export interface PayloadUserLogin {
  user: User
}

export interface PayloadUserLogout {
  user: {
    login: string,
    password: string,
  }
}

export interface PayloadAllUser {
  user: User[]
}

export interface PayloadSendReq {
  message: {
    to: string,
    text: string,
  }
}

export interface Message {
  id: string,
  from: string,
  to: string,
  text: string,
  datetime: number,
  status: {
    isDelivered: boolean,
    isReaded: boolean,
    isEdited: boolean,
  }
}

export interface PayloadSendRes {
  message: Message
}

export interface PayloadHistoryReq {
  user: {
    login: string,
  }
}

export interface PayloadHistoryRes {
  user: {
    messages: Message[]
  }
}

export interface PayloadReadStatusReq {
  message: {
    id: string
  }
}

export interface PayloadReadStatusRes {
  message: {
    id: string,
    status: {
      isReaded: boolean,
    }
  }
}

export interface PayloadDelivered {
  message: {
    id: string,
    status: {
      isDelivered: boolean,
    }
  }
}

export interface PayloadDeleteRes {
  message: {
    id: string,
  }
}

export interface PayloadDeleteReq {
  message: {
    id: string,
    status: {
      isDeleted: boolean,
    }
  }
}

export interface PayloadEditRes {
  message: {
    id: string,
    text: string,
  }
}

export interface PayloadEditReq {
  message: {
    id: string,
    text: string,
    status: {
      isEdited: boolean,
    }
  }
}

export interface PayloadError {
  error: string,
}
