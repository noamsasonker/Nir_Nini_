$path = "c:\Users\PC\Documents\antigravity\noble-pascal\js\projects-data.js"
$text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# Find each gallery item block
$pattern = 'url:\s*"([^"]+)",\s*title:\s*\{\s*he:\s*"([^"]+)",\s*en:\s*"([^"]+)"\s*\}'
$matches = [regex]::Matches($text, $pattern)

$i = 1
foreach ($m in $matches) {
    $url = $m.Groups[1].Value
    $he = $m.Groups[2].Value
    $en = $m.Groups[3].Value
    Write-Host ("{0,2}. [{1}] `n    HE: {2} `n    EN: {3}`n" -f $i, $url, $he, $en)
    $i++
}
