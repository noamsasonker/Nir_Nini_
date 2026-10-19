$path = "c:\Users\PC\Documents\antigravity\noble-pascal\js\projects-data.js"
$text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

$openBrace = ($text.ToCharArray() | Where-Object { $_ -eq '{' }).Count
$closeBrace = ($text.ToCharArray() | Where-Object { $_ -eq '}' }).Count
$openBracket = ($text.ToCharArray() | Where-Object { $_ -eq '[' }).Count
$closeBracket = ($text.ToCharArray() | Where-Object { $_ -eq ']' }).Count

Write-Host "Braces { }: $openBrace / $closeBrace"
Write-Host "Brackets [ ]: $openBracket / $closeBracket"

if ($openBrace -eq $closeBrace -and $openBracket -eq $closeBracket) {
    Write-Host "STATUS: ALL BRACKETS PERFECTLY BALANCED!"
} else {
    Write-Host "STATUS: MISMATCH DETECTED!"
}

$regex = [regex]'url:\s*"([^"]+)"'
$matches = $regex.Matches($text)
Write-Host "Total gallery images found in JS: $($matches.Count)"
