import { createLocalVue, shallowMount } from "@vue/test-utils";
import App from "../src/App.vue";

const localVue = createLocalVue();

function setupAppInstance() {
	return shallowMount(App, {
		localVue,
	});
}

describe("app", () => {
	it("initiates app", () => {
		expect.assertions(3);

		const wrapper = setupAppInstance();

		expect(wrapper.vm._isVue).toBe(true);
		expect(wrapper.find("#app").exists()).toBe(true);
		expect(wrapper.find("gallery-stub").exists()).toBe(true);
	});
});
