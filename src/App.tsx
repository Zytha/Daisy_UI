import { createSignal } from "solid-js";

export default function App() {
    const [toggle, setToggle] = createSignal(true);
    var number: number = 1;

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
            <div class="flex flex-col justify-center items-center h-screen mx-8">
                <div class="bg-[#172028] p-12 rounded-2xl">
                    <div
                        class={
                            toggle()
                                ? "alert alert-info justify-center"
                                : "alert justify-center"
                        }
                    >
                        {toggle() ? "Enabled" : "Disabled"}
                    </div>

                    <div class="flex justify-center items-center gap-4 p-4 pb-0">
                        <label for="toggle">Toggle</label>
                        <input
                            type="checkbox"
                            class="toggle toggle-lg"
                            onChange={(e) => handleChange(e)}
                            checked
                        />
                    </div>
                </div>
                <div class="btm-nav">
                    <button
                        class="text-info"
                        onclick={(e) => {
                            number = 0;
                        }}
                    >
                        <i class="fa-solid fa-house-chimney"></i>
                    </button>
                    <button
                        class="text-info active"
                        onclick={(e) => {
                            number = 1;
                        }}
                    >
                        <i class="fa-solid fa-circle-info"></i>
                    </button>
                    <button
                        class="text-info"
                        onclick={(e) => {
                            number = 2;
                        }}
                    >
                        <i class="fa-solid fa-chart-simple"></i>
                    </button>
                </div>
            </div>
        </>
    );
}
