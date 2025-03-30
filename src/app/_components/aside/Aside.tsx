import "../../../../public/hero.jpg";

export function Aside() {
    return (
        <aside
            className="hidden md:flex w-3/12 h-screen rounded-br-[100px] bg-cover"
            style={{
                backgroundPosition: "36% 75%",
                aspectRatio: "16/9",
                backgroundImage:
                    "linear-gradient(to right, rgb(0, 0, 0, 0), rgb(0, 0, 0, 0)), url(/hero.jpg)",
                height: "100vh",
                opacity: 0.9,
            }}
        ></aside>
    );
}
