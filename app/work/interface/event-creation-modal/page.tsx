export default function EventCreationModal() {
  return (
    <div className="h-full w-full">
      <div className="mb-4 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-medium text-white">
            Event creation modal
          </h1>
          <h2 className="text-neutral-600">
            My goal was to get some interactions going with radix and tailwind
            and just try to get my head wrapped around how to put that together
          </h2>
        </div>
        <div className="flex gap-2">
          <div className="rounded-md bg-neutral-700 p-1 text-sm text-neutral-100">
            radix
          </div>
          <div className="rounded-md bg-neutral-700 p-1 text-sm text-neutral-100">
            tailwind
          </div>
          <div className="rounded-md bg-neutral-700 p-1 text-sm text-neutral-100">
            framer-motion
          </div>
        </div>
      </div>
      <EventCreationModal></EventCreationModal>
    </div>
  );
}
