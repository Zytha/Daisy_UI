import { createSignal } from "solid-js";

export default function App() {
    const [toggle, setToggle] = createSignal(true);

    function handleChange(e) {
        let isChecked = e.target.checked;

        if (isChecked) {
            setToggle(true);
        } else {
            setToggle(false);
        }
    }

    return (
        <>
            <div class="flex flex-col justify-center items-center h-screen p-8">
                <div class="bg-[#172028] p-12 rounded-2xl">
                    <div class={toggle() ? " alert alert-info" : "alert"}>
                        <span class="text-center text-2xl">
                            {toggle() ? "Enabled" : "Disabled"}
                        </span>
                    </div>

                    <div class="flex justify-center items-center gap-4 p-4 pb-0">
                        <label for="toggle" class="text-2xl">
                            Toggle
                        </label>
                        <input
                            type="checkbox"
                            class="toggle toggle-lg"
                            onChange={(e) => handleChange(e)}
                            checked
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
