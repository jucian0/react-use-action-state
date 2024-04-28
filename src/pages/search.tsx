import { useActionState } from "react";
import { useSearchParams } from "react-router-dom";
import zod from "zod";

const schema = zod.object({
  email: zod.string().email(),
  name: zod.string().min(3),
});

const initialState = {
  values: {
    email: "juciano@juciano.com",
    name: "juciano",
  },
  errors: {
    email: null,
    name: null,
  },
};

export function SearchPage() {
  const [query, setQuery] = useSearchParams();
  const [state, submitAction, isPending] = useActionState(
    async (previousState: typeof initialState, formData: FormData) => {
      setQuery(Object.fromEntries(formData.entries()));
      return {
        errors: {},
        values: Object.fromEntries(formData.entries()),
      };
    },
    initialState,
  );

  return (
    <div>
      <h1>Home</h1>

      <form
        action={submitAction}
        onReset={() => setQuery(initialState.values)}
        className="flex flex-col gap-4"
      >
        <label className="input input-bordered flex items-center gap-2">
          <input
            defaultValue={state.values.email}
            className="grow"
            placeholder="Email"
            name="email"
          />
          <span>{state.errors.email}</span>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            defaultValue={state.values.name}
            className="grow"
            placeholder="Username"
            name="name"
          />
          <span>{state.errors.name}</span>
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            defaultValue={state.values.password}
            type="password"
            className="grow"
            name="password"
          />
          <span>{state.errors.password}</span>
        </label>
        <button type="submit" disabled={isPending} className="btn">
          Submit
        </button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}
