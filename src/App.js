import React from "react";
import { RecoilRoot } from "recoil";
import { recoilPersist } from "recoil-persist";
import { TodoList } from "./components/todoList";
import Footer from "./components/footer";

function App() {
  recoilPersist({
    key: "recoil-persist",
    storage: localStorage,
  });

  return (
    <RecoilRoot>
      <main className="app">
        <TodoList />
        <Footer />
      </main>
    </RecoilRoot>
  );
}

export default App;
