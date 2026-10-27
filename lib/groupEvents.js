
/**
 * HASINDU MD - Group Events Disabled
 * Keeps compatibility with the existing bot.
 */

async function groupEvents(conn, update) {
    // Group welcome and goodbye events are disabled.
    return;
}

module.exports = {
    groupEvents
};
