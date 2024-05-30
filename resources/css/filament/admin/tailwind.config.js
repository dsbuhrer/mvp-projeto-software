import preset from "../../../../vendor/filament/filament/tailwind.config.preset";

export default {
    presets: [preset],
    content: [
        "./app/Filament/**/*.php",
        "./resources/views/filament/**/*.blade.php",
        "./resources/views/vendor/**/*.blade.php",
        "./resources/views/components/followups-kanban/**/*.blade.php",
        "./vendor/filament/**/*.blade.php",
    ],
};
