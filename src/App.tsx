import Sidebar from "./components/Sidebar";
import SettingsHeader from "./components/SettingsHeader";
import SettingsForm from "./components/SettingsForm";

const App = () => (
  <div className="flex min-h-screen flex-col bg-white sm:flex-row">
    <Sidebar className="w-full sm:w-64 sm:flex-shrink-0" />
    <main className="flex w-full flex-1 flex-col">
      <SettingsHeader />
      <section className="flex-1 px-4 py-4 sm:px-6 sm:py-6 md:px-8">
        <SettingsForm />
      </section>
    </main>
  </div>
);

export default App;
