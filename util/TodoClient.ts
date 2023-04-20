export interface Todo {
  todoID?: string;
  description: string;
  checked: boolean;
}

export type Todos = Todo[];

export class TodoClient {
  api: string;

  constructor(api: string) {
    this.api = api;
  }

  addTodo(todo: Todo) {
    return fetch(`${this.api}/todo`, {
      method: "POST",
      mode: 'cors', // no-cors, *cors, same-origin
      referrerPolicy: 'no-referrer', // no-referrer, *client

      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  }

  listTodos() {
    return fetch(`${this.api}/todo`, {
      credentials: "include",
      mode: 'cors', // no-cors, *cors, same-origin
      referrerPolicy: 'no-referrer', // no-referrer, *client
    });
  }

  patchTodo(id: string, checked: boolean) {
    return fetch(`${this.api}/todo/${id}`, {
      method: "PATCH",
      credentials: "include",
      mode: 'cors', // no-cors, *cors, same-origin
      referrerPolicy: 'no-referrer', // no-referrer, *client
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({checked}),
    });
  }

  deleteTodo(id: string) {
    return fetch(`${this.api}/todo/${id}`, {
      method: "DELETE",
      credentials: "include",
      mode: 'cors', // no-cors, *cors, same-origin
      referrerPolicy: 'no-referrer', // no-referrer, *client
    });
  }

  logout() {
    return fetch(`${this.api}/logout`, {
      credentials: "include",
      mode: 'cors', // no-cors, *cors, same-origin
      referrerPolicy: 'no-referrer', // no-referrer, *client
    });
  }
}
