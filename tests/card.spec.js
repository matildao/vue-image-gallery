import { mount, createLocalVue } from "@vue/test-utils";
import Card from "../src/components/Card.vue";

const localVue = createLocalVue();
const testProps = {
	farm: 1,
	server: "test",
	id: "test",
	secret: "test",
};

function setupCardInstance(props) {
	return mount(Card, {
		propsData: props,
		localVue,
	});
}

describe("card", () => {
	it("passes the correct props correctly and checks types", () => {
		expect.assertions(5);

		const wrapper = setupCardInstance(testProps);

		expect(typeof wrapper.props().farm).toBe("number");
		expect(typeof wrapper.props().server).toBe("string");
		expect(typeof wrapper.props().id).toBe("string");
		expect(typeof wrapper.props().secret).toBe("string");

		expect(wrapper.props()).toMatchObject(testProps);
	});

	it("creates a correct link with passed props", () => {
		expect.assertions(1);

		const wrapper = setupCardInstance(testProps);

		expect(wrapper.find("img").attributes("src")).toBe(
			"https://farm1.staticflickr.com/test/test_test_b.jpg"
		);
	});
});
