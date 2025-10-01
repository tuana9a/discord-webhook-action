# discord-webhook-action

discord webhook github action

## Inputs

### `webhook-url`

**Required** Discord webhook url from your channel.

### `content`

**Required** Message to send.

Checkout https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params for details.

## Outputs

### `timestamp`

The time it executed.

### `response`

Response from discord server.

## Example usage

```yaml
uses: tuana9a/discord-webhook-action@dev
with:
  webhook-url: ${{ secrets.DISCORD_WEBHOOK }}
  content: ${{ secrets.DISCORD_WEBHOOK }}
```