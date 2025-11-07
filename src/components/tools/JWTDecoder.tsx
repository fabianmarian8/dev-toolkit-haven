import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Copy, Check, AlertCircle, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

export const JWTDecoder = () => {
  const [jwtInput, setJwtInput] = useState('');
  const [decodedHeader, setDecodedHeader] = useState('');
  const [decodedPayload, setDecodedPayload] = useState('');
  const [signature, setSignature] = useState('');
  const [error, setError] = useState('');
  const [copiedHeader, setCopiedHeader] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  const decodeJWT = () => {
    try {
      setError('');
      
      if (!jwtInput.trim()) {
        setError('Please enter a JWT token');
        return;
      }

      const parts = jwtInput.trim().split('.');
      
      if (parts.length !== 3) {
        setError('Invalid JWT format. JWT must have 3 parts separated by dots.');
        return;
      }

      // Decode header
      const header = JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')));
      setDecodedHeader(JSON.stringify(header, null, 2));

      // Decode payload
      const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
      setDecodedPayload(JSON.stringify(payload, null, 2));

      // Set signature
      setSignature(parts[2]);

    } catch (err) {
      setError('Failed to decode JWT. Please check if the token is valid.');
      setDecodedHeader('');
      setDecodedPayload('');
      setSignature('');
    }
  };

  const clearAll = () => {
    setJwtInput('');
    setDecodedHeader('');
    setDecodedPayload('');
    setSignature('');
    setError('');
  };

  const copyToClipboard = async (text: string, type: 'header' | 'payload') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'header') {
        setCopiedHeader(true);
        setTimeout(() => setCopiedHeader(false), 2000);
      } else {
        setCopiedPayload(true);
        setTimeout(() => setCopiedPayload(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Parse payload for display
  const getPayloadInfo = () => {
    if (!decodedPayload) return null;

    try {
      const payload = JSON.parse(decodedPayload);
      const info: { label: string; value: string; color?: string }[] = [];

      if (payload.exp) {
        const expDate = new Date(payload.exp * 1000);
        const isExpired = expDate < new Date();
        info.push({
          label: 'Expires',
          value: expDate.toLocaleString(),
          color: isExpired ? 'text-red-500' : 'text-green-500',
        });
      }

      if (payload.iat) {
        const iatDate = new Date(payload.iat * 1000);
        info.push({
          label: 'Issued At',
          value: iatDate.toLocaleString(),
        });
      }

      if (payload.nbf) {
        const nbfDate = new Date(payload.nbf * 1000);
        info.push({
          label: 'Not Before',
          value: nbfDate.toLocaleString(),
        });
      }

      if (payload.iss) {
        info.push({
          label: 'Issuer',
          value: payload.iss,
        });
      }

      if (payload.sub) {
        info.push({
          label: 'Subject',
          value: payload.sub,
        });
      }

      if (payload.aud) {
        info.push({
          label: 'Audience',
          value: Array.isArray(payload.aud) ? payload.aud.join(', ') : payload.aud,
        });
      }

      return info;
    } catch {
      return null;
    }
  };

  const payloadInfo = getPayloadInfo();

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="space-y-2">
        <Label htmlFor="jwt-input">JWT Token</Label>
        <Textarea
          id="jwt-input"
          placeholder="Paste your JWT token here (e.g., eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...)"
          value={jwtInput}
          onChange={(e) => setJwtInput(e.target.value)}
          className="font-mono text-sm min-h-[120px]"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button onClick={decodeJWT} className="flex-1">
          Decode JWT
        </Button>
        <Button onClick={clearAll} variant="outline">
          Clear
        </Button>
      </div>

      {/* Error Message */}
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Decoded Output */}
      {decodedHeader && (
        <div className="space-y-4">
          {/* Quick Info */}
          {payloadInfo && payloadInfo.length > 0 && (
            <div className="rounded-lg border bg-card p-4 space-y-2">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Token Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                {payloadInfo.map((info, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{info.label}:</span>
                    <span className={cn("font-medium", info.color)}>
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Header</Label>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard(decodedHeader, 'header')}
                className="h-8"
              >
                {copiedHeader ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="rounded-lg border bg-muted p-4">
              <pre className="text-sm font-mono overflow-x-auto">
                {decodedHeader}
              </pre>
            </div>
          </div>

          {/* Payload */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Payload</Label>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard(decodedPayload, 'payload')}
                className="h-8"
              >
                {copiedPayload ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="rounded-lg border bg-muted p-4">
              <pre className="text-sm font-mono overflow-x-auto">
                {decodedPayload}
              </pre>
            </div>
          </div>

          {/* Signature */}
          <div className="space-y-2">
            <Label>Signature</Label>
            <div className="rounded-lg border bg-muted p-4">
              <p className="text-sm font-mono break-all text-muted-foreground">
                {signature}
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              ⚠️ Signature verification requires the secret key and is not performed in the browser for security reasons.
            </p>
          </div>
        </div>
      )}

      {/* Info Box */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription className="text-sm">
          <strong>Privacy Note:</strong> All JWT decoding happens in your browser. Your tokens never leave your device.
        </AlertDescription>
      </Alert>
    </div>
  );
};
